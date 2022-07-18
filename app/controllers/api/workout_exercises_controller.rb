class Api::WorkoutExercisesController < ApplicationController
    def index 
        workout_exercises = WorkoutExercise.all
        render json: workout_exercises, include: ['exercise_ids', 'workout_id']
    end
end
