class WorkoutExerciseSerializer < ActiveModel::Serializer
  attributes :id, :rep_count, :date_of_workout, :workout_length
end
