package org.niit.examserver.controller;
import org.niit.examserver.domain.User;
import org.niit.examserver.security.IGenerateJWTTocken;
import org.niit.examserver.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
@RestController
@RequestMapping("/userservice/")
@CrossOrigin
public class UserController {
    private IUserService userService;
    private IGenerateJWTTocken jwtTocken;

    @Autowired
    public UserController(IUserService userService, IGenerateJWTTocken jwtTocken) {
        this.userService = userService;
        this.jwtTocken = jwtTocken;
    }

    @PostMapping("/user")
    public ResponseEntity<?> addUser(@RequestBody User user) throws Exception {
        user.setProfile("default.png");
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> getUser(@PathVariable("username") String username){
        return new ResponseEntity<>(this.userService.getUser(username), HttpStatus.FOUND);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable long userId){
        return new ResponseEntity<>(this.userService.deleteUser(userId), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> validateUser(@RequestBody User user){
        User tempUser = userService.loginCheck(user.getUsername(), user.getPassword());
        if(tempUser != null){
            Map<String, String> map = jwtTocken.jwtTockenGenerator(user);
            return new ResponseEntity<>(map, HttpStatus.FOUND);
        }
        return new ResponseEntity<>("Invalid User Name Or Password",HttpStatus.NOT_FOUND);
    }

}
