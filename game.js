// Define initial game state
let money = 0;
let gamesReleased = 0;
let devPoints = 0;
let graphicsLevel = 1;
let gameplayLevel = 1;

// Function to update the display
function updateDisplay() 
{
	document.getElementById("money").textContent = money;
	document.getElementById("games-released").textContent = gamesReleased;
	document.getElementById("dev-points").textContent = devPoints;
	document.getElementById("upgade-graphics").textContent = `Upgrade Graphics ($${graphicsLevel * 100})`;
	document.getElementById("upgrade-gameplay").textContent = `Upgrade Gameplay ($${gameplayLevel * 200})`;
}

// Function to develop a game
function developGame() 
{
	if (devPoints >= 10) 
	{
		devPoints -= 10;
		money += Math.floor(Math.random() * 50) + 10;
		gamesReleased++;
		updateDisplay();
	}
}

// Function to upgrade graphics or gameplay
function upgrade(type) 
{
	const cost = type === "graphics" ? graphicsLevel * 100 : gameplayLevel * 200;
	if (money >= cost) 
	{
		money -= cost;
		if (type === "graphics") 
		{
			graphicsLevel++;
		} else if (type === "gameplay") 
		{
			gameplayLevel++;
		}
		updateDisplay();
	}
}

// Function to unlock achievements
function checkAchievements()
{
	if (gamesReleased >= 10)
	{
		// Unlock achievement 1
		document.getElementById("achievement-1").classList.remove("hidden");
	}
	else if (gamesReleased >= 25)
	{
		// Unlock achievement 2
		document.getElementById("achievement-2").classList.remove("hidden");
	}
	else if (money >= 1000)
	{
		document.getElementById("achievement-3").classList.remove("hidden");
	}
	else if (devPoints => 1000)
	{
		document.getElementById("achievement-4").classList.remove("hidden");
	}
	// More achievements and checks here
}

// Function to simulate marketing
function doMarketing()
{
	if (money >= 100)
	{
		money -= 100;
		const marketingEffect = Math.floor(Math.random() * 20) + 10;
		devPoints += marketingEffect;
		updateDisplay();
	}
}

// Function to simulate hiring new developers
function hireDevelopers()
{
	if (money >= 300)
	{
		money -= 300;
		devPoints += 50;
		updateDisplay();
	}
}

// Function to simulate releasing an expansion pack
function releaseExpansionPack()
{
	if (money >= 500 && gamesReleased >= 5)
	{
		money -= 500;
		gamesReleased++;
		updateDisplay();
	}
}

// Function to simulate porting a game to another platform
function portGame()
{
	if (money >= 400 && gamesReleased >= 10)
	{
		money -= 400;
		gamesReleased++;
		updateDisplay();
	}
}

// Function to simulate negotiating a publishing deal
function negotiateDeal()
{
	if (money >= 200 && gamesReleased >= 5)
	{
		money -= 200;
		money += Math.floor(Math.random() * 100) + 50;
		updateDisplay();
	}
}

// Function to handle game over condition
function checkGameOver()
{
	if (money < 0)
	{
		alert("Game over! Your studio went bankrupt.");
		location.reload(); // Reload the game
	}
}

// Function to simulate game reviews
function reviewGames()
{
	if (gamesReleased >= 1)
	{
		const reviewEffect = Math.floor(Math.random() * 10) + 5;
		devPoints += reviewEffect;
		updateDisplay();
	}
}

// Function to simulate creating a new game engine
function createGameEngine()
{
	if (money >= 800 && gamesReleased >= 10)
	{
		money -= 800;
		devPoints += 100;
		updateDisplay();
	}
}

// Function to simulate attending game conferences
function attendConference()
{
	if (money >= 500)
	{
		money -= 500;
		devPoints += 50;
		updateDisplay();
	}
}
	
// Attach event listeners
document.getElementById("btn_develop_game").addEventListener("click", developGame);
document.getElementById("btn_upgrade_graphics").addEventListener("click", () => upgrade("graphics"));
document.getElementById("btn_upgrade_gameplay").addEventListener("click", () => upgrade("gameplay"));
document.getElementById("btn_do_marketing").addEventListener("click", doMarketing);
document.getElementById("btn_hire_developer").addEventListener("click", hireDeveloper);
document.getElementById("btn_release_expansion").addEventListener("click", releaseExpansionPack);
document.getElementById("btn_port_game").addEventListener("click", portGame);
document.getElementById("btn_negotiate_deal").addEventListener("click", negotiateDeal);
document.getElementById("btn_review_games").addEventListener("click", reviewGames);
document.getElementById("btn_create_game_engine").addEventListener("click", createGameEngine);
document.getElementById("btn_attend_conference").addEventListener("click", attendConference);

// Main game loop to periodically check for game over and achievements
setInterval(() =>
{
	checkGameOver();
	checkAchievements();
}, 1000); // Check every second
	
// Initialize display
updateDisplay()
