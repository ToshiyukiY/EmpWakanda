
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var Double_salaries = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	Double_salaries.click = function Double_salaries_click (event)// @startlock
	{// @endlock
		sources.employees.DoubleSalary({
			onSuccess:function(event){
				sources.employees.allEntities();
			}});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("Double_salaries", "click", Double_salaries.click, "WAF");
// @endregion
};// @endlock
