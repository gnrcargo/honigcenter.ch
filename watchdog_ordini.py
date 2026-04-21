import os
import time
import shutil
import subprocess

# Percorsi configurati per il tuo sistema
PATHS_INCOMING = [
    r"C:\Users\has_m\OneDrive\Automazione_AI\In arrivo",
    r"C:\Users\has_m\OneDrive\Automazione_AI\In_arrivo"
]
PATH_DONE = r"D:\honigcenter.ch\videos\processed"
DAVINCI_EXE = r"C:\Program Files\Blackmagic Design\DaVinci Resolve\Resolve.exe"
BRANDING_SCRIPT = r"D:\honigcenter.ch\scripts\premium_branding.py"
COMFYUI_DIR = r"D:\comfyui"

def monitora_ordini():
    print("--- Antigravity Watchdog Attivo ---", flush=True)
    for path in PATHS_INCOMING:
        print(f"In attesa di ordini in: {path}", flush=True)
        os.makedirs(path, exist_ok=True)
    os.makedirs(PATH_DONE, exist_ok=True)

    while True:
        try:
            for path in PATHS_INCOMING:
                # Lista solo i file .txt
                files = [f for f in os.listdir(path) if f.lower().endswith('.txt')]
                
                for file in files:
                    file_path = os.path.join(path, file)
                    file_size = os.path.getsize(file_path)
                    print(f"[*] Trovato file: {file} (Dimensione: {file_size} bytes)", flush=True)
                    
                    # Se il file è 0 byte, probabilmente lo stanno ancora scrivendo o sincronizzando
                    if file_size == 0:
                        continue
                        
                    # Attendi un secondo per sicurezza
                    time.sleep(1)
                    
                    # Tenta di leggere il file
                    comando = ""
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            comando = f.read().strip()
                    except UnicodeDecodeError:
                        try:
                            with open(file_path, 'r', encoding='utf-16') as f:
                                comando = f.read().strip()
                        except:
                            print(f"[!] Errore encoding su {file}", flush=True)
                            continue
                    
                    if not comando:
                        continue
                    
                    print(f"\n[Nuovo Ordine] Eseguo: {comando}", flush=True)
                    
                    # Logica per DaVinci Resolve
                    if "davinci" in comando.lower():
                        print("Avvio Automazione Branding Premium (FFmpeg)...", flush=True)
                        # Eseguo lo script di branding professionale via FFmpeg
                        subprocess.run(['python', BRANDING_SCRIPT, file_path], check=True)
                    
                    # Logica per ComfyUI
                    if "comfyui" in comando.lower():
                        print("Avvio elaborazione su ComfyUI...", flush=True)
                        subprocess.Popen(['start', 'cmd', '/k', 'python', 'main.py'], 
                                       cwd=COMFYUI_DIR, shell=True)

                    # Sposta il file nei completati
                    timestamp = int(time.time())
                    nuovo_nome = f"{timestamp}_{file}"
                    shutil.move(file_path, os.path.join(PATH_DONE, nuovo_nome))
                    print(f"[+] Lavoro terminato! File spostato in: {PATH_DONE}", flush=True)

        except Exception as e:
            print(f"Errore durante il monitoraggio: {e}", flush=True)

        time.sleep(10) # Controlla ogni 10 secondi

if __name__ == "__main__":
    monitora_ordini()
