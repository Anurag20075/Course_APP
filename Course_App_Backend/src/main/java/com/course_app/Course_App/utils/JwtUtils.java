package com.course_app.Course_App.utils;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Component
public class JwtUtils {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private Long expiration;

    // Extract username from JWT token
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Extract expiration time from JWT token
    public java.time.LocalDateTime extractExpiration(String token) {
        return extractClaim(token,
                claim -> claim.getExpiration().toInstant().atZone(java.time.ZoneId.systemDefault()).toLocalDateTime());
    }

    // Extract all claims from JWT token
    private <T> T extractClaim(String token, java.util.function.Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parser() // Use .parser() instead of .parserBuilder()
                .verifyWith((SecretKey) getSigningKey()) // Use verifyWith instead of setSigningKey
                .build()
                .parseSignedClaims(token) // Use parseSignedClaims instead of parseClaimsJws
                .getPayload(); // Use getPayload() instead of getBody()
    }

    // Validate JWT token
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String userName = extractUsername(token);
        return (userName.equals(userDetails.getUsername()) &&
                !isTokenExpired(token));
    }

    // Check if token is expired
    public Boolean isTokenExpired(String token) {
        return extractExpiration(token).isBefore(java.time.LocalDateTime.now());
    }

    // Generate JWT token
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts
                .builder()
                .claims(claims) // Modern syntax
                .subject(subject)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSigningKey()) // Algorithm is usually inferred from the key
                .compact();
    }

    private java.security.Key getSigningKey() {
        // Change this line:
        byte[] keyBytes = secretKey.getBytes(java.nio.charset.StandardCharsets.UTF_8);
        // To ensure it's long enough for HS256, your secretKey must be at least 32
        // chars
        return io.jsonwebtoken.security.Keys.hmacShaKeyFor(keyBytes);
    }
}
