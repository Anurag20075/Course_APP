package com.course_app.Course_App.CourseController;

import org.springframework.beans.factory.annotation.Autowired;
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
        // Authenticate user
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

        // Generate JWT token
        UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
        return jwtUtils.generateToken(userDetails);
    }

    // 2. Signup Endpoint (Register New User)
    @PostMapping("/signup")
    public String registerUser(@RequestBody UserEntity user) {
        // Check if user already exists
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return "User already exists!";
        }

        // Encode the plain text password
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        // Set default role
        user.setRole("USER");

        // Save user to database
        userRepository.save(user);

        return "User registered successfully!";
    }
}
