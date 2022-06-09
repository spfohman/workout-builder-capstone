class Exercise < ApplicationRecord
    has_many :workout_exercises 
    has_many :workouts
end
