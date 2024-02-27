import requests
import random

streak = 0

def getFlavorText(num):
	# make a call to pokeapi
	response = requests.get(f'https://pokeapi.co/api/v2/pokemon-species/{num}/').json()
	# get flavor text in English (just first english entry)
	for flavor_text in response['flavor_text_entries']:
		if flavor_text['language']['name'] == 'en':
			askQuestion(flavor_text['flavor_text'], response['name'], num)
			break

def askQuestion(flavor_text, pokemon, id):
	global streak
	print('\nENTRY ' + str(streak+1))	
	answer = input('\n' + flavor_text + '\n\nName that Pokemon (or type hint): ')
	if answer.lower() == pokemon:
		streak += 1
		print('\nCorrect! Your current streak is ' + str(streak) + '!')
		getFlavorText(random.randint(0, 151))
	elif answer == 'hint':
		typeHint(flavor_text, pokemon, id)
	else:
		print('\nIncorrect! The answer is ' + pokemon.capitalize())
		print('GAME OVER! You answered ' + str(streak) + ' correctly!')
		restart = input('Play again? (y/n): ')
		if restart.lower() == 'y' or restart.lower() == 'yes':
			startQuiz()
		else:
			return 'all done!'


def typeHint(flavor_text, pokemon, id):
	type = requests.get(f'https://pokeapi.co/api/v2/pokemon/{id}').json()
	print('This Pokemon\'s type is ' + type['types'][0]['type']['name'].upper())
	askQuestion(flavor_text, pokemon, id)


def startQuiz():
	global streak
	streak = 0
	print('\nNAME THAT POKEMON!!\n===================')
	print('Can you identify a Pokemon by its flavor text?\nSee how many in a row you can answer correctly!\n')
	start = input('Are you ready? (y/n): ')
	if start.lower() == 'y' or start.lower() == 'yes':
		randNum = random.randint(0, 151)
		getFlavorText(randNum)	
	else:
		return 'all done!'

startQuiz()