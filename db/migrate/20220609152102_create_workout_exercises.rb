class CreateWorkoutExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :workout_exercises do |t|
      t.datetime :date_of_workout
      t.time :workout_length
      t.integer :workout_id 
      t.integer :exercise_id
      t.timestamps
    end
  end
end
