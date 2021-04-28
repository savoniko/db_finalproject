Rubens Lacouture – Section 03 

Savvas Nikopoulos – Section 03 

Walter Galdamez – Section 03 

 

## Problem statement: 

Basketball statistics are extremely difficult to keep track of. There are thousands of players in the NBA, and they play thousands of games and take thousands of shots collectively. During their tenure, they typically change teams, positions, and or sponsors. New managers often also get introduced to teams or shuffled around to other teams as well. This is a massive amount of data that needs to be categorized, stored, and accessed frequently and efficiently. Many of the solutions that are being utilized are insufficient in solving this problem. 

 

## Solution statement: 

Our solution to the problem of keeping track of basketball statistics is to run the data through a database management system. MySQL Workbench organizes and runs the backend tables and stores the relevant data on a local server. Then, React.js allows us to make this data accessible to a user through a webapp where they can directly manage and add new data to store on the backend without touching an IDE or writing any code. 

 

## User: 

Users who are interested in basketball will have access to view our basketball statistics database on their machines. They will see the names of their favorite players, teams, and more. Every player will have key demographical and statistical information associated with them viewable and interactable in one clean and accessible user interface. Authenticated users will be allowed to add in data of missing players, teams, or statistics directly through the webapp instead of having to dive deep into the backend of our solution.  

 

 

 

 

# Domain objects: 

 

## Statistics: 

This is the domain object that displays and allows for the statistical basketball data to be manipulated by authorized users. This displays data such as points per game, rebounds per game, assists per game, field goal percentage, 3pt field goal percentage, steals per game and finally blocks per game. The data could either be manually entered into the database through the user interface or directly on the database in MySQL workbench.  

 

## Endorsements:  

This is the domain object that displays and allows for the endorsement data of each player to be manipulated by authorized users. This displays the company name of the endorsement, the contract duration and the player it belongs to. Since this domain has a one-to-many relationship with players, the player Id denoting the player it belongs to is the foreign key. 

NOTE: 

One thing to point out is that our Endorsement editor page needs the foreign key to the player the endorsement belongs to. This key is not auto filled, so it's up to the user to manually put in the right key. The user can get the key from the player editor page. 

 

# User to Domain Object Relationship: 

Our user table “Player” has a one-to-many relationship to the “Endorsements” table. A player may or may not have an endorsement and those that do may have more than one depending on how popular and sellable their image is. Each of these endorsements is sponsored by a company or government entity and has a contract related to it with a specified duration. 

 

# Domain Object to Domain Object Relationship: 

Our domain object to domain object relationship is between the “Team” table and the “Management” table. A team has one or more managers assigned and associated with it. Our teams table includes the name and city that they are from. The management table includes the manager’s first name, last name, and the value of the team they manage.  

 

# Portable Enumeration: 

The enumeration that we used was to associate position names with the player table through an auxiliary “Positions” table. It is supplied the ID associated with the position that is associated with a player and returned the string name of the position that they play from the “PositionName” enumeration table. 

# User Interface Requirements: 

The homepage of our database model is a table list of all the players underneath headers displaying their basketball team’s name. Each player has clickable hyperlink which takes the user to a new page displaying a profile shot of the player and all the functions that we have implemented. This is our link to each player’s endorsements list and their associated stats. Each of these pages has a button allowing the user to cancel their current selection and return to the previous page, a button to delete all the data of the page that they clicked for that associated player, an option to update the form with information that they provide, and finally a button to create in case there is no data already in the database for the given player or if they’ve created one through the GUI itself. 

Player List: displays a list of all the players within all the team selections provided. 

Player Info: displays the profile picture of the selected player as well as links to their stats, endorsements, and a link back to the “Player List”. 

Player Editor: displays a particular player for editing and allows creating a new player, and links back to the “Player Info” where users can navigate to stats and endorsements for the player. 

Stat List: displays the stats of the player. 

Stat Editor: displays a particular list of stats for a player that allows the user editing access and the ability to add entirely new stats.  

Endorsement List: displays a list of all the endorsements of a player.  

Endorsement Editor: displays the endorsement editing form where new endorsements can be added, or current endorsements can be edited in by the user. 
