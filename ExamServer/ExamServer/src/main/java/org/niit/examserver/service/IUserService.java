package org.niit.examserver.service;

import org.niit.examserver.domain.User;

public interface IUserService {
    User createUser(User user) throws Exception;

    User getUser(String username);

    String deleteUser(long userId);

    User loginCheck(String username, String userPassword);
}
