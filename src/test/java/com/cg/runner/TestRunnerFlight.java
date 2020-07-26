package com.cg.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",
tags={"@Chrome"},glue="com.cg.stepDefinition",dryRun=false,
monochrome=true,plugin={"pretty","json:test-output/cucumber.json","junit:test-output/cucumber.xml","html:test-output"})//name of the source folder where Feature file lies and package of step definition

public class TestRunnerFlight {

}
