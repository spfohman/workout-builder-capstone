class WorkoutExerciseSerializer < ActiveModel::Serializer
  attributes :id, :date_of_workout, :workout_length
end
