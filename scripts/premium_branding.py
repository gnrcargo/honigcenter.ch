import subprocess
import os
import time

def brand_video_premium(input_file, output_file, logo_file, font_file):
    # Get video duration
    result = subprocess.run(
        ['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', input_file],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT
    )
    duration = float(result.stdout)
    
    # Complex Filter construction
    # 1. Scale to Vertical 1080x1920
    # 2. Add Logo (Top Left)
    # 3. Add Text 1 (Top Center) with Fade In/Out
    # 4. Add Text 2 (Bottom Center) with Fade In/Out
    # 5. Add a subtle warm vignette
    
    # Use relative path for font to avoid drive letter colon issues in FFmpeg filters
    rel_font = os.path.relpath(font_file, BASE_DIR).replace('\\', '/')
    
    filter_complex = (
        f"[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,"
        f"colorbalance=rs=0.1:gs=0.05:bs=-0.05,unsharp=5:5:1.0:5:5:0.0[v];"
        f"[1:v]scale=250:-1[logo_scaled];"
        f"[v][logo_scaled]overlay=(main_w-overlay_w)/2:120[v_logo];"
        f"[v_logo]drawtext=fontfile='{rel_font}':text='PURA ENERGIA ALPINA':"
        f"fontsize=80:fontcolor=white:y=450:shadowcolor=black@0.6:shadowx=4:shadowy=4:x=(w-text_w)/2,"
        f"drawtext=fontfile='{rel_font}':text='DALL\\'ALVEARE E SENZA FILTRI':"
        f"fontsize=60:fontcolor=white:y=h-400:shadowcolor=black@0.6:shadowx=3:shadowy=3:x=(w-text_w)/2,"
        f"vignette=angle=0.08:aspect=9/16[vout]"
    )

    cmd = [
        'ffmpeg', '-y',
        '-i', input_file,
        '-i', logo_file,
        '-filter_complex', filter_complex,
        '-map', '[vout]',
        '-map', '0:a?',
        '-c:v', 'libx264', '-preset', 'medium', '-crf', '19',
        '-c:a', 'aac', '-b:a', '192k',
        output_file
    ]

    print(f"Starting Premium Branding for: {os.path.basename(input_file)}")
    subprocess.run(cmd, check=True)
    print(f"Result saved to: {output_file}")

if __name__ == "__main__":
    BASE_DIR = r"D:\honigcenter.ch"
    RAW_DIR = os.path.join(BASE_DIR, "videos", "raw")
    PROCESSED_DIR = os.path.join(BASE_DIR, "videos", "processed")
    SCRIPTS_DIR = os.path.join(BASE_DIR, "scripts")
    
    logo = os.path.join(BASE_DIR, "public", "logo.png")
    font = os.path.join(SCRIPTS_DIR, "Poppins-Bold.ttf")

    if not os.path.exists(PROCESSED_DIR):
        os.makedirs(PROCESSED_DIR)

    # Process target video
    target_file = "miele_alpino_comfy.mp4"
    input_video = os.path.join(RAW_DIR, target_file)
    
    if os.path.exists(input_video):
        output_video = os.path.join(PROCESSED_DIR, f"miele_alpino_premium_{int(time.time())}.mp4")
        try:
            brand_video_premium(input_video, output_video, logo, font)
        except Exception as e:
            print(f"Error processing {target_file}: {e}")
    else:
        print(f"Video {target_file} not found in raw directory.")
