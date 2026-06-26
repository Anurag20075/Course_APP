package com.course_app.Course_App.Service.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.course_app.Course_App.Entity.UserEntity;
import com.course_app.Course_App.Repo.UserRepository;
import com.course_app.Course_App.Service.UserService;
import com.course_app.Course_App.exception.EmailAlreadyExistsException;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserEntity registerUser(UserEntity user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new EmailAlreadyExistsException(user.getEmail());
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }
}
