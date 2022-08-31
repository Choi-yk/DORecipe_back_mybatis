package com.dorecipe.main.file.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FileDto {
	
	private String uuid;
	private String fileName;
	private String contentType;
	
	
}
