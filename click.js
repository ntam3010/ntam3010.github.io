		var form = document.getElementById("form01");
		var form02 = document.getElementById("form02");
		// var goingBtn = document.getElementById("goingBtn");
		var notgoBtn = document.getElementById("notgoBtn");
		var inputName = document.getElementById("inputName");

		function openForm()
		{
			form.style.display = 'block';
		}

		function going()
		{
			var name = inputName.value;
			if (name == "") 
			{
				alert("Vui lòng cho biết tên người tham dự!");
			}
			else
			{
				alert("Cảm ơn " + name);
				form.style.display = 'none';
			}

		}
		// function notgo()
		// {
		// 	alert("Chán thế");
		// 	form.style.display = 'none';
		// }
		notgoBtn.addEventListener('click', function()
			{
				form02.style.display = 'block';
				form.style.display = 'none';
			});