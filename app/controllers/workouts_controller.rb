class WorkoutsController < ApplicationController
    def index 
        workouts = Workout.all 
        render json: workouts 
    end
    
    def show 
        workout = Workout.find_by_id(params[:id])
        if workout 
            render json: workout 
        else
            render json: {error: "Workout not found."}, status: :not_found 
        end 
    end

    def create 
        workout = user.workouts.create(workout_params)
        if workout.valid? 
            render json: workout, status: :created 
        else 
            render json: {errors: workout.errors.full_messages}, status: :unprocessable_entity 
        end 
    end

    def update 
        workout = user.workouts.find_by(id: params[:id])
        if workout 
            workout.update(workout_params)
            render json: workout, status: :accepted 
        else 
            render json: {error: "Not found"}, status: :not_found 
        end 
    end 

    def destroy 
        workout = user.workouts.find_by(id: params[:id])
        if workout 
            workout.destroy 
            render json: {success: "Run deleted."}
        else 
            render json: {error: "Run not found"}, status: :not_found 
        end 
    end

    private 
    def workout_params 
        params.require(:workout).permit(:name, :desc)
    end

end
