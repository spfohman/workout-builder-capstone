class CreateWorkoutExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :workout_exercises do |t|
      t.integer :rep_count
      t.datetime :date_of_workout
      t.time :workout_length

      t.timestamps
    end
  end
end
