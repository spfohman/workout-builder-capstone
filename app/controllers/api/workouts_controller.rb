class Api::WorkoutsController < ApplicationController
    def index 
        workouts = Workout.all
        render json: workouts
        # , include: ['exercise_ids']
    end
    
    def show 
        workout = Workout.find_by_id(params[:id])
        if workout 
            render json: workout, include: ['exercise_ids'] 
        else
            render json: {error: "Workout not found."}, status: :not_found 
        end 
    end

    def create 
        workout = Workout.create(workout_params)
      
        if workout.valid? 
            render json: workout, status: :created 
        else 
            render json: {error: workout.errors.full_messages}, status: :unprocessable_entity 
        end 
    end

    def update 
        workout = Workout.find_by(id: params[:id])
        if workout 
            workout.update(workout_params)
            render json: workout, status: :accepted 
        else 
            render json: {error: "Not found"}, status: :not_found 
        end 
    end 

    def destroy 
        workout = Workout.find_by(id: params[:id])
        if workout 
            workout.destroy 
            head :no_content 
            # render json: {success: "Workout deleted."}
        else 
            render json: {error: "Workout not found"}, status: :not_found 
        end 
    end

    private 
    def workout_params 
        params.require(:workout).permit(:name, :desc, :likes, exercise_ids: [])
    end

end
