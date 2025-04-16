package com.loren.backend.mappers;

import com.loren.backend.dto.UserDto;
import com.loren.backend.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);
}
