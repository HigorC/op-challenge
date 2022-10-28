package com.ci.beers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({ "com.ci.beers.*" })
public class BeersApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeersApplication.class, args);
	}

}
