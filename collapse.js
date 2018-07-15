$(document).ready(function()
{
	let a = document.getElementById('collapseDivSection1');
	let b = document.getElementById('collapseDivSection2');
	let c = document.getElementById('collapseDivSection3');

	$(a).hide();
	$(b).hide();
	$(c).hide();

	collapsibleDiv.addEventListener("click", function()
	{
		$('this').toggle("active");
		let panel = this.nextElementSibling;
        if (panel.style.display == "block")
        {
        	panel.style.display = "none";
        }
        else
        {
            panel.style.display = "block";
            b.style.display = "none";
            c.style.display = "none";
        }
	});

	collapsibleDiv2.addEventListener("click", function()
	{
		$('this').toggle("active");
		let panel = this.nextElementSibling;
		if (panel.style.display == "block")
		{
            panel.style.display = "none";
        }
        else
        {
            panel.style.display = "block";
            a.style.display = "none";
            c.style.display = "none";
        }
	});

	collapsibleDiv3.addEventListener("click", function()
	{
		$('this').toggle("active");
		let panel = this.nextElementSibling;
		if (panel.style.display == "block")
		{
            panel.style.display = "none";
        }
        else
        {
            panel.style.display = "block";
            a.style.display = "none";
            b.style.display = "none";
        }
	});


});