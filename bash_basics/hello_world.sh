#!/bin/bash

int=5

if [[ int -lt 10 ]]
then
  echo $int is less than 10
elif [[ int -lt 6 ]]
then
  echo $int is less than 6
else
  echo $int is greater than 10
fi