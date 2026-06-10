import subprocess
import os
import time

def brand_video_slowmo(input_file, logo_file, font_file, output_file):
    BASE_DIR = r"D:\honigcenter.ch"
    rel_font = os.path.relpath(font_file, BASE_DIR).replace('\\', '/')
    
    text1 = "IL RITMO DELLA NATURA"
    text2 = "ECCELLENZA IN OGNI GOCCIA"
    
    # SLOW MOTION: setpts=2.0*PTS for video, atempo=0.5 for audio (if any)
    # We also keep the vertical scaling and branding
    filters = [
        f"[0:v]setpts=2.0*PTS,scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,colorbalance=rs=0.1:gs=0.05:bs=-0.05,unsharp=5:5:1.0:5:5:0.0[v_slow]",
        f"[1:v]scale=250:-1[logo_scaled]",
        f"[v_slow][logo_scaled]overlay=(main_w-overlay_w)/2:120[v_logo]",
        f"[v_logo]drawtext=fontfile='{rel_font}':text='{text1}':fontsize=80:fontcolor=white:shadowcolor=black@0.6:shadowx=4:shadowy=4:x=(w-text_w)/2:y=450[v_txt1]",
        f"[v_txt1]drawtext=fontfile='{rel_font}':text='{text2}':fontsize=60:fontcolor=white:shadowcolor=black@0.6:shadowx=3:shadowy=3:x=(w-text_w)/2:y=h-400[v_txt2]",
        f"[v_txt2]vignette=angle=0.08:aspect=9/16[vout]"
    ]
    
    filter_str = ";".join(filters)

    cmd = [
        'ffmpeg', '-y',
        '-i', input_file,
        '-i', logo_file,
        '-filter_complex', filter_str,
        '-map', '[vout]',
        '-c:v', 'libx264', '-preset', 'medium', '-crf', '19',
        output_file
    ]

    print(f"Executing: {' '.join(cmd)}")
    subprocess.run(cmd, check=True)

if __name__ == "__main__":
    BASE_DIR = r"D:\honigcenter.ch"
    RAW_VIDEO = os.path.join(BASE_DIR, "videos", "raw", "miele_flow_fast.mp4")
    LOGO = os.path.join(BASE_DIR, "public", "logo.png")
    FONT = os.path.join(BASE_DIR, "scripts", "Poppins-Bold.ttf")
    OUTPUT = os.path.join(BASE_DIR, "videos", "processed", f"miele_ritmo_slowmo_{int(time.time())}.mp4")

    try:
        brand_video_slowmo(RAW_VIDEO, LOGO, FONT, OUTPUT)
        print(f"Success! Slow-mo result saved to: {OUTPUT}")
    except Exception as e:
        print(f"Error: {e}")
