package org.niit.examserver.security;

import org.niit.examserver.domain.User;

import java.util.Map;

public interface IGenerateJWTTocken {
    Map<String, String> jwtTockenGenerator(User user);
}
