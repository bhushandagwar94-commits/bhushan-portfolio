import os
from PIL import Image, ImageDraw, ImageFont

def create_bd_icon(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background rounded rectangle
    radius = int(size * 0.22)
    bg_color = (12, 12, 18, 255)
    border_color = (201, 178, 124, 255) # Luxury Gold
    cyan_color = (92, 200, 255, 255)    # Electric Cyan
    white_color = (248, 250, 252, 255)

    # Draw rounded background
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=bg_color, outline=border_color, width=max(1, int(size * 0.035)))

    # Scale-dependent geometry
    w = size
    h = size

    if size <= 32:
        # High contrast, ultra-readable BD for small 16x16 and 32x32
        font_size = int(size * 0.55)
        try:
            font = ImageFont.truetype("arialbd.ttf", font_size)
        except:
            font = ImageFont.load_default()
        
        text = "BD"
        bbox = draw.textbbox((0, 0), text, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
        tx = (w - tw) // 2
        ty = (h - th) // 2 - int(size * 0.05)
        
        draw.text((tx, ty), text, fill=border_color, font=font)
    else:
        # Detailed Geometric Interlocked BD Monogram for 180x180, 192x192, 512x512
        sw = max(2, int(size * 0.07)) # stroke width
        
        # Left Stem (Vertical bar of B)
        stem_x1 = int(size * 0.24)
        stem_x2 = stem_x1 + sw
        stem_y1 = int(size * 0.22)
        stem_y2 = int(size * 0.78)
        draw.rounded_rectangle([stem_x1, stem_y1, stem_x2, stem_y2], radius=int(sw * 0.3), fill=border_color)

        # Upper Lobe of B
        b_top_y = stem_y1
        b_mid_y = int(size * 0.48)
        b_bot_y = stem_y2
        b_right_top = int(size * 0.65)
        b_right_bot = int(size * 0.72)

        # Upper arc
        draw.arc([stem_x1, b_top_y, b_right_top, b_mid_y], start=270, end=90, fill=border_color, width=sw)
        # Lower arc
        draw.arc([stem_x1, b_mid_y, b_right_bot, b_bot_y], start=270, end=90, fill=border_color, width=sw)

        # Interlocked D Outer Arc (Cyan accent)
        d_right = int(size * 0.82)
        draw.arc([stem_x2 - int(sw * 0.5), stem_y1, d_right, stem_y2], start=270, end=90, fill=cyan_color, width=max(2, int(sw * 0.6)))

        # Center Gold Monogram Diamond Accent
        cx, cy = int(size * 0.5), int(size * 0.5)
        d_sz = int(size * 0.04)
        draw.polygon([(cx, cy - d_sz), (cx + d_sz, cy), (cx, cy + d_sz), (cx - d_sz, cy)], fill=white_color)

    return img

def main():
    public_dir = r"d:\GitHub\portfholio\public"
    sizes = {
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "apple-touch-icon.png": 180,
        "icon-192.png": 192,
        "icon-512.png": 512
    }

    for filename, s in sizes.items():
        img = create_bd_icon(s)
        out_path = os.path.join(public_dir, filename)
        img.save(out_path, "PNG")
        print(f"Generated {out_path} ({s}x{s})")

    # Generate ICO format containing 16 and 32 sizes
    ico_img = create_bd_icon(32)
    ico_path = os.path.join(public_dir, "favicon.ico")
    ico_img.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32)])
    print(f"Generated {ico_path}")

if __name__ == "__main__":
    main()
