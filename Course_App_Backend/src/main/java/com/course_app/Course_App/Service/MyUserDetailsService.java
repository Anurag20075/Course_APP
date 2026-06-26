package com.course_app.Course_App.Service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface MyUserDetailsService extends UserDetailsService {

    UserDetails loadUserByUsername( String email);
}
