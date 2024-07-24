# r-p-s
Rock Paper Scissors game

Pseudo code:

RPS Array - Rock[0], Paper[1], Scissors[2]

Func - Get human input
    prompt - rock paper scissors?
    floor to lower case
    Is it a valid input? {
            If no - prompt again with error message
            else continue to game round }

Func - get computer input
    random number 0 - 2
    apply number to rps array

Function scores
    if PC === CC then its a draw

    if PC = rock && CC = paper then you lose

    if pc = rock && CC = scissors then you win

    if PC = Paper && CC = rock then you win

    if pc = paper && CC = scissors then you lose

    if PC = scissors && CC = paper then you win

    if pc = scissors && CC = rock then you lose
