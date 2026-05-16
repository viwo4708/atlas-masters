# main.py
from deepface import DeepFace

# replace with the path to one of your test images
image_path = "test_images/new-college-students.jpg"

result = DeepFace.analyze(
    img_path=image_path,
    actions=["gender", "emotion"],
    enforce_detection=False
)

print(result)