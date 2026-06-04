package com.course_app.Course_App.Service.ServiceImpl;

import org.springframework.stereotype.Service;

import com.course_app.Course_App.Entity.UserEntity;
import com.course_app.Course_App.Repo.UserRepository;
import com.course_app.Course_App.Service.MyUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Service
public class MyUserDetailsServiceImpl implements MyUserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 1. Fetch user from DB
        UserEntity user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));

        // 2. Return a Spring Security User object
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPassword()) // This must be the BCrypt hashed password
                .roles(user.getRole()) // e.g., "USER" or "ADMIN"
                .build();
    }
}
