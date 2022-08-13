package com.dorecipe.main.event.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseDTO {

    private String resultCode;
    private Object res;

}