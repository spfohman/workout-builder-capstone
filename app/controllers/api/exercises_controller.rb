class Api::ExercisesController < ApplicationController
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
    def update 
        exercise = user.exercises.find_by(id: params[:id])
        if exercise
            exercise.update(exercise_params)
            render json: exercise, status: :accepted 
        else 
            render json: {errors: exercise.errors.full_messages}, status: :not_found
        end 
    end 

    private 

    def exercise_params 
        params.permit(:name, :description, :rep_count)
    end
end
