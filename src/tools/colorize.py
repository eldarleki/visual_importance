from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
import os

# Directory where the input images are located
input_dir = "input/"

# Load all images from the input directory
image_files = os.listdir(input_dir)

for image_file in image_files:
    if not image_file.endswith(".png"):
        continue
    
    # Load the grayscale image
    image_path = os.path.join(input_dir, image_file)
    image = Image.open(image_path)
    
    # Normalize the image to the range of 0-1
    image_normalized = np.array(image) / 255.0
    
    # Create a color map for the heatmap
    cmap = plt.get_cmap("jet")  # Choose a colormap (e.g., coolwarm)
    
    # Apply the colormap to the normalized image
    heatmap = cmap(image_normalized)
    
    # Convert the heatmap to RGB format
    heatmap_rgb = (heatmap[:, :, :3] * 255).astype(np.uint8)
    
    # Create a PIL Image from the colored heatmap
    colored_image = Image.fromarray(heatmap_rgb, mode="RGB")
    
    # Save the colored image
    output_dir = "output/"
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, image_file)
    colored_image.save(output_path)

print("Colorization complete.")
