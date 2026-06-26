package com.course_app.Course_App.Service.ServiceImpl;

import org.springframework.stereotype.Service;

import com.course_app.Course_App.Entity.UserEntity;
import com.course_app.Course_App.Repo.UserRepository;
import com.course_app.Course_App.Service.MyUserDetailsService;
import com.course_app.Course_App.exception.EmailAlreadyExistsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

// @Service
// public class MyUserDetailsServiceImpl implements MyUserDetailsService {

//     @Autowired
//     private UserRepository userRepository;

//     @Override
//     public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//         // 1. Fetch user from DB
//         UserEntity user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));

//         // 2. Return a Spring Security User object
//         return org.springframework.security.core.userdetails.User.builder()
//                 .username(user.getEmail ())
//                 .password(user.getPassword()) // This must be the BCrypt hashed password
//                 .roles(user.getRole()) // e.g., "USER" or "ADMIN"
//                 .build();
//     }
// }
@Service
public class MyUserDetailsServiceImpl implements MyUserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // 1. Fetch user from DB using the email passed during login
        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));
                
        if(!userRepository.findByEmail(email).isPresent()){
            throw new EmailAlreadyExistsException("User not found: " + email);
        }

        // 2. Return Spring Security's User object, mapping email to the username property
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail()) // <-- FIX: Use email here so Spring can match it against the login input
                .password(user.getPassword()) 
                .roles(user.getRole()) 
                .build();
    }
}
