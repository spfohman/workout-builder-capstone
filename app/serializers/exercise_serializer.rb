class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  # has_many :workouts 
  
end
