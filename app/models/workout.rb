class Workout < ApplicationRecord
    has_many :users 
    has_many :workout_exercises 
    has_many :exercises, through: :workout_exercises
end
