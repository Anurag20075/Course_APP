package com.course_app.Course_App.CourseController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.course_app.Course_App.DTO.AuthRequest;
import com.course_app.Course_App.Entity.UserEntity;
import com.course_app.Course_App.Repo.UserRepository;
import com.course_app.Course_App.Service.MyUserDetailsService;
import com.course_app.Course_App.exception.EmailAlreadyExistsException;
import com.course_app.Course_App.utils.JwtUtils;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    // 1. Login Endpoint
    @PostMapping("/login")
    public String login(@RequestBody AuthRequest authRequest) {
        // Authenticate user using email instead of username
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

        // Generate JWT token using email
        UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getEmail());
        return jwtUtils.generateToken(userDetails);
    }

    // 2. Signup Endpoint (Register New User)
    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody UserEntity user) {
        // Check if user already exists
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new EmailAlreadyExistsException(user.getEmail());
        }
        // Encode the plain text password
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        // Set default role
        user.setRole("USER");

        // Save user to database
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body("User registered successfully!");
    }
}