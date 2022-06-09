class WorkoutExercise < ApplicationRecord
    belongs_to :exercise 
    belongs_to :workout 
    has_many :exercises
end
