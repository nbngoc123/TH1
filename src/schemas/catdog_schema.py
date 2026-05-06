# """
# Schema cho ứng dụng CatDog (không liên quan đến todo)
# """
# from pydantic import BaseModel
# from typing import Optional
# from datetime import datetime

# class CatBase(BaseModel):
#     name: str
#     breed: Optional[str] = None
#     age: Optional[int] = None
#     color: Optional[str] = None

# class CatCreate(CatBase):
#     pass

# class Cat(CatBase):
#     id: int
#     created_at: datetime

#     class Config:
#         from_attributes = True

# class DogBase(BaseModel):
#     name: str
#     breed: Optional[str] = None
#     age: Optional[int] = None
#     color: Optional[str] = None

# class DogCreate(DogBase):
#     pass

# class Dog(DogBase):
#     id: int
#     created_at: datetime

#     class Config:
#         from_attributes = True