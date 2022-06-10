class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc
  # has_many :exercises
end
