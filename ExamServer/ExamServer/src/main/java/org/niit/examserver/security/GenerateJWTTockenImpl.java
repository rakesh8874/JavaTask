package org.niit.examserver.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.niit.examserver.domain.User;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class GenerateJWTTockenImpl implements IGenerateJWTTocken{
    @Override
    public Map<String, String> jwtTockenGenerator(User user) {
        String jwtTocken = null;
        jwtTocken = Jwts.builder().setSubject(user.getUsername()).signWith(SignatureAlgorithm.HS256, "userTocken").setIssuedAt(new Date()).compact();
        Map<String, String> map = new HashMap<>();
        map.put("jwtTocken", jwtTocken);
        map.put("message","User Logged In Successfully");
        return map;
    }
}
