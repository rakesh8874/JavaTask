package org.niit.examserver.service.impl;

import org.niit.examserver.domain.User;
import org.niit.examserver.repository.RoleRepository;
import org.niit.examserver.repository.UserRepository;
import org.niit.examserver.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceIml implements IUserService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;

    @Autowired
    public UserServiceIml(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    //creating user
    @Override
    public User createUser(User user) throws Exception {
        User isExistUser = userRepository.findByUsername(user.getUsername());
        if(isExistUser != null){
            System.out.println("User is already Exist There");
            throw new Exception("User Already Present");
        }
        isExistUser = this.userRepository.save(user);
        return isExistUser;
    }

    @Override
    public User getUser(String username) {
      return userRepository.findByUsername(username);
    }

    @Override
    public String deleteUser(long userId) {
        this.userRepository.deleteById(userId);
        return "User Deleted Successfully";
    }
    @Override
    public User loginCheck(String username, String userPassword) {
        User user = userRepository.findByUsername(username);
       if(user != null){
           if(user.getUsername().equals(username) && user.getPassword().equals(userPassword)){
               return user;
       }
                return null;
            }
        return null;
    }
}
