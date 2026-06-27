// package com.course_app.Course_App.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.course_app.Course_App.DTO.AuthRequest;
// import com.course_app.Course_App.Entity.UserEntity;
// import com.course_app.Course_App.Repo.UserRepository;
// import com.course_app.Course_App.Service.MyUserDetailsService;
// import com.course_app.Course_App.exception.EmailAlreadyExistsException;
// import com.course_app.Course_App.utils.JwtUtils;

// @RestController
// @RequestMapping("/auth")
// public class AuthController {

//     @Autowired
//     private AuthenticationManager authenticationManager;

//     @Autowired
//     private JwtUtils jwtUtils;

//     @Autowired
//     private MyUserDetailsService userDetailsService;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     @Autowired
//     private UserRepository userRepository;

//     @PostMapping("/login")
//     public String login(@RequestBody AuthRequest authRequest) {
//         authenticationManager.authenticate(
//                 new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
//         UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getEmail());
//         return jwtUtils.generateToken(userDetails);
//     }

//     @PostMapping("/signup")
//     public ResponseEntity<String> registerUser(@RequestBody UserEntity user) {
//         if (userRepository.existsByEmail(user.getEmail())) {
//             throw new EmailAlreadyExistsException(user.getEmail());
//         }
//         String encodedPassword = passwordEncoder.encode(user.getPassword());
//         user.setPassword(encodedPassword);

//         user.setRole("USER");
//         userRepository.save(user);

//         return ResponseEntity.status(HttpStatus.CREATED)
//                 .body("User registered successfully!");
//     }
// }

package com.course_app.Course_App.Controller;

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
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

        UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getEmail());
        return jwtUtils.generateToken(userDetails);
    }

    // 2. Signup Endpoint (Dynamic Roles)
    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody UserEntity user) {
        // Check if user already exists
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new EmailAlreadyExistsException(user.getEmail());
        }

        // Encode the plain text password
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        // Dynamic Role Logic
        if (user.getRole() == null || user.getRole().trim().isEmpty()) {
            user.setRole("STUDENT"); // Default fallback
        } else {
            String incomingRole = user.getRole().toUpperCase().trim();

            // Validate incoming role against allowed system roles
            if (incomingRole.equals("ADMIN") || incomingRole.equals("STUDENT") || incomingRole.equals("INSTRUCTOR")) {
                user.setRole(incomingRole);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Invalid role! Choose between STUDENT, INSTRUCTOR, or ADMIN.");
            }
        }

        // Save user to database
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body("User registered successfully as " + user.getRole() + "!");
    }
}