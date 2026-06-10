import subprocess
import os
import time

def brand_video_premium(input_file, logo_file, font_file, output_file):
    BASE_DIR = r"D:\honigcenter.ch"
    # Escaping for Windows FFmpeg path
    font_path = os.path.abspath(font_file).replace('\\', '/').replace(':', '\\:')
    
    # Correct strategic texts
    text1 = "PURA ENERGIA ALPINA"
    text2 = "DALL ALVEARE E SENZA FILTRI"
    
    filters = [
        f"[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,colorbalance=rs=0.1:gs=0.05:bs=-0.05,unsharp=5:5:1.0:5:5:0.0[v_base]",
        f"[1:v]scale=250:-1[logo_scaled]",
        f"[v_base][logo_scaled]overlay=(main_w-overlay_w)/2:120[v_logo]",
        f"[v_logo]drawtext=fontfile='{font_path}':text='{text1}':fontsize=80:fontcolor=white:shadowcolor=black@0.6:shadowx=4:shadowy=4:x=(w-text_w)/2:y=450[v_txt1]",
        f"[v_txt1]drawtext=fontfile='{font_path}':text='{text2}':fontsize=60:fontcolor=white:shadowcolor=black@0.6:shadowx=3:shadowy=3:x=(w-text_w)/2:y=h-400[v_txt2]",
        f"[v_txt2]vignette=angle=0.08:aspect=9/16[vout]"
    ]
    
    filter_str = ";".join(filters)

    cmd = [
        'ffmpeg', '-y',
        '-i', input_file,
        '-i', logo_file,
        '-filter_complex', filter_str,
        '-map', '[vout]',
        '-map', '0:a?',
        '-c:v', 'h264_nvenc', '-preset', 'p6', '-cq', '19', '-b:v', '0',
        '-c:a', 'aac', '-b:a', '192k',
        output_file
    ]

    print(f"Processing {input_file} with Premium Branding...")
    subprocess.run(cmd, check=True)

if __name__ == "__main__":
    BASE_DIR = r"D:\honigcenter.ch"
    INPUT = r"D:\Downloads\Video_Pronto_Richiesta_Completata.mp4"
    LOGO = os.path.join(BASE_DIR, "public", "logo.png")
    FONT = os.path.join(BASE_DIR, "scripts", "Poppins-Bold.ttf")
    
    PROCESSED_DIR = os.path.join(BASE_DIR, "videos", "processed")
    if not os.path.exists(PROCESSED_DIR):
        os.makedirs(PROCESSED_DIR)
        
    output_filename = f"Honigcenter_Premium_Post_{int(time.time())}.mp4"
    OUTPUT = os.path.join(PROCESSED_DIR, output_filename)

    brand_video_premium(INPUT, LOGO, FONT, OUTPUT)
    print(f"Done! Video ready at: {OUTPUT}")
