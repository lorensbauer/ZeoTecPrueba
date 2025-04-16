package com.loren.backend.mappers;

import com.loren.backend.dtos.SignUpDto;
import com.loren.backend.dtos.UserDto;
import com.loren.backend.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Optional;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);
}
