import os
import urllib.request
from PIL import Image

# Disable SSL verification for safety in this environment
import ssl
ssl._create_default_https_context = ssl._create_unverified_context

def main():
    logo_url = "https://evasionski.fr/wp-content/uploads/2025/05/Logo-avec-accent-transparent.png"
    public_dir = os.path.join(os.path.dirname(__file__), "..", "public")
    
    logo_path = os.path.join(public_dir, "logo.png")
    logo_black_path = os.path.join(public_dir, "logo-black.png")
    
    # 1. Download original logo
    print(f"Downloading original logo from {logo_url}...")
    urllib.request.urlretrieve(logo_url, logo_path)
    print("Logo downloaded successfully.")
    
    # 2. Open and process to create the black version
    img = Image.open(logo_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        r, g, b, a = item
        # If the pixel is close to white/grayscale and is light enough, change it to black
        # Grayscale means r, g, b values are very close to each other
        if abs(r - g) < 20 and abs(r - b) < 20 and abs(g - b) < 20 and r > 180:
            # Change to black (0, 0, 0) preserving the alpha (transparency)
            new_data.append((0, 0, 0, a))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(logo_black_path, "PNG")
    print(f"Black version of logo saved to {logo_black_path}.")

    # Also save as webp
    logo_webp_path = os.path.join(public_dir, "logo.webp")
    logo_black_webp_path = os.path.join(public_dir, "logo-black.webp")
    
    Image.open(logo_path).save(logo_webp_path, "WEBP")
    img.save(logo_black_webp_path, "WEBP")
    print("WebP versions generated.")

if __name__ == "__main__":
    main()
