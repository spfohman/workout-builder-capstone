class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :rep_count, :description
  has_many :workouts 
  
end
