package com.dorecipe.main;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins={"http://localhost:3000","http://localhost:3005"})  
@RestController
public class IndexController {

	@GetMapping("/")
	public String index() {
		return "index";
	}

}