class ExercisesController < ApplicationController
    def index 
        exercises = Exercise.all 
        render json: exercises 
    end
    def create 
        exercise = user.exercises.create(exercise_params)
        if exercise.valid? 
            render json: exercise, status: :created 
        else 
            render json: {errors: exercise.errors.full_messages}, status: :unprocessable_entity 
        end 
        
    end

    private 

    def exercise_params 
        params.permit(:name, :description, :rep_count)
    end
end
