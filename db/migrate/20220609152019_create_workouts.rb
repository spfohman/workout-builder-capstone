class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :name
      t.text :desc
      t.integer :exercise_ids, array: true
      t.timestamps
    end
  end
end
