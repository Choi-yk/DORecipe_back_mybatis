//package com.dorecipe.main.jwt;
//
//import java.util.NoSuchElementException;
//
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service("userDetailsService")
//public class UserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UsersRepository usersRepository;
//
//    @Transactional(readOnly = true)
//    @Override
//    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
//        try {
//            User user = usersRepository.findByLogin(login).get();
//            return new UserPrincipal(usersRepository.findByLogin(login).get());
//        } catch (NoSuchElementException e) {
//            throw new UsernameNotFoundException("User " + login + " not found.", e);
//        }
//    }
//
//}