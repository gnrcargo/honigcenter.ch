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
        f"[v_logo]drawtext=fontfile='{rel_font}':text='MIELE PURO NATURALE':"
        f"fontsize=75:fontcolor=white:x=(w-text_w)/2:y=420:shadowcolor=black@0.8:shadowx=4:shadowy=4:"
        f"alpha='if(lt(t,1),t,if(gt(t,{duration-2}),{duration}-t,1))'[v_text1];"
        f"[v_text1]drawtext=fontfile='{rel_font}':text='LA TUA ENERGIA QUOTIDIANA':"
        f"fontsize=60:fontcolor=orange:x=(w-text_w)/2:y=h-300:shadowcolor=black@0.8:shadowx=3:shadowy=3:"
        f"alpha='if(lt(t,2),0,if(lt(t,3),t-2,if(gt(t,{duration-3}),{duration}-t-1,1)))'[v_final];"
        f"[v_final]vignette=angle=0.1:aspect=9/16[vout]"
    )

    cmd = [
        'ffmpeg', '-y',
        '-i', input_file,
        '-i', logo_file,
        '-filter_complex', filter_complex,
        '-map', '[vout]',
        '-map', '0:a?',
        '-c:v', 'libx264', '-preset', 'slow', '-crf', '18',
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

    # Process all videos in raw folder
    for filename in os.listdir(RAW_DIR):
        if filename.lower().endswith('.mp4'):
            input_video = os.path.join(RAW_DIR, filename)
            video_name = os.path.splitext(filename)[0]
            output_video = os.path.join(PROCESSED_DIR, f"{video_name}_branded_{int(time.time())}.mp4")
            
            try:
                brand_video_premium(input_video, output_video, logo, font)
            except Exception as e:
                print(f"Error processing {filename}: {e}")
